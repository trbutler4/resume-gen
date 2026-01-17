#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import ora from "ora";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import ResumeGenerator from "./generateResume";
import { getAvailableConfigTypes } from "./config";

const program = new Command();

// CLI Configuration
program
  .name("resume-gen")
  .description(
    "TypeScript Resume Generator - Create tailored resumes for different job types",
  )
  .version("1.0.0");

// Utility functions
const ensureOutputDirectory = (outputDir: string): void => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
};

const buildProject = (): void => {
  const spinner = ora("Building TypeScript project...").start();
  try {
    execSync("npm run build", { stdio: "pipe" });
    spinner.succeed("TypeScript build completed");
  } catch (error) {
    spinner.fail("TypeScript build failed");
    console.error(chalk.red("Build error:"), error);
    process.exit(1);
  }
};

const validateResumeType = (type: string): void => {
  const availableTypes = getAvailableConfigTypes();
  if (!availableTypes.includes(type)) {
    console.error(chalk.red(`Error: Invalid resume type '${type}'`));
    console.log(chalk.yellow("Available types:"), availableTypes.join(", "));
    process.exit(1);
  }
};

const generateSingleResume = (type: string, outputDir: string): string => {
  const outputFile = path.join(outputDir, `resume-${type}.html`);
  const generator = new ResumeGenerator();

  try {
    generator.generate(type, outputFile);
    return outputFile;
  } catch (error) {
    throw new Error(`Failed to generate ${type} resume: ${error}`);
  }
};

// Generate command
program
  .command("generate")
  .alias("gen")
  .description("Generate a specific resume type")
  .argument("<type>", "Resume type to generate")
  .option("-o, --output <dir>", "Output directory", "resumes")
  .option("--no-build", "Skip TypeScript build step")
  .action((type: string, options) => {
    console.log(chalk.blue.bold("📄 Resume Generator\n"));

    // Validate resume type
    validateResumeType(type);

    // Build if needed
    if (options.build) {
      buildProject();
    }

    // Ensure output directory exists
    ensureOutputDirectory(options.output);

    // Generate resume
    const spinner = ora(`Generating ${type} resume...`).start();
    try {
      const outputFile = generateSingleResume(type, options.output);
      spinner.succeed(`Generated: ${chalk.green(outputFile)}`);

      console.log(chalk.gray("\n📁 Output location:"), chalk.cyan(outputFile));
      console.log(
        chalk.gray("🌐 Open in browser:"),
        chalk.cyan(`file://${path.resolve(outputFile)}`),
      );
    } catch (error) {
      spinner.fail(`Failed to generate ${type} resume`);
      console.error(chalk.red("Error:"), error);
      process.exit(1);
    }
  });

// Generate all command
program
  .command("all")
  .description("Generate all resume types")
  .option("-o, --output <dir>", "Output directory", "resumes")
  .option("--no-build", "Skip TypeScript build step")
  .action((options) => {
    console.log(chalk.blue.bold("📄 Resume Generator - All Types\n"));

    // Build if needed
    if (options.build) {
      buildProject();
    }

    // Ensure output directory exists
    ensureOutputDirectory(options.output);

    const availableTypes = getAvailableConfigTypes();
    const results: { type: string; file: string; success: boolean }[] = [];

    console.log(
      chalk.yellow(`Generating ${availableTypes.length} resume types...\n`),
    );

    // Generate each resume type
    for (const type of availableTypes) {
      const spinner = ora(`Generating ${type} resume...`).start();
      try {
        const outputFile = generateSingleResume(type, options.output);
        spinner.succeed(`${chalk.green("✓")} ${type} resume`);
        results.push({ type, file: outputFile, success: true });
      } catch (error) {
        spinner.fail(`${chalk.red("✗")} ${type} resume`);
        console.error(chalk.red(`  Error: ${error}`));
        results.push({ type, file: "", success: false });
      }
    }

    // Summary
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    console.log(chalk.blue.bold("\n📊 Generation Summary:"));
    console.log(chalk.green(`✓ Successful: ${successful.length}`));
    if (failed.length > 0) {
      console.log(chalk.red(`✗ Failed: ${failed.length}`));
    }

    if (successful.length > 0) {
      console.log(chalk.gray("\n📁 Generated files:"));
      successful.forEach((result) => {
        console.log(chalk.gray("  -"), chalk.cyan(result.file));
      });
    }
  });

// List command
program
  .command("list")
  .alias("ls")
  .description("List available resume types")
  .action(() => {
    console.log(chalk.blue.bold("📋 Available Resume Types:\n"));

    const availableTypes = getAvailableConfigTypes();

    availableTypes.forEach((type) => {
      console.log(chalk.green("●"), chalk.cyan(type));
    });

    console.log(
      chalk.gray(`\nTotal: ${availableTypes.length} resume types available`),
    );
    console.log(
      chalk.gray("Usage:"),
      chalk.yellow(`resume-gen generate <type>`),
    );
  });

// Dev command for development server
program
  .command("dev")
  .description("Start development server with file watching")
  .option("-p, --port <port>", "Server port", "3000")
  .option("--no-build", "Skip initial TypeScript build")
  .action((options) => {
    console.log(chalk.blue.bold("🚀 Starting Development Server\n"));

    if (options.build) {
      buildProject();
    }

    const spinner = ora("Starting development server...").start();
    try {
      // Start browser-sync (assuming it's available)
      const browserSyncCmd = `npx browser-sync start --server --port ${options.port} --files "**/*.html" "**/*.css" "dist/**/*.js" --ignore "node_modules" --no-notify --no-open`;

      spinner.succeed("Development server started");
      console.log(
        chalk.green("🌐 Server running at:"),
        chalk.cyan(`http://localhost:${options.port}`),
      );
      console.log(chalk.yellow("📝 TypeScript watch mode active"));
      console.log(chalk.gray("Press Ctrl+C to stop\n"));

      execSync(browserSyncCmd, { stdio: "inherit" });
    } catch (error) {
      spinner.fail("Failed to start development server");
      console.error(chalk.red("Error:"), error);
      process.exit(1);
    }
  });

// Info command
program
  .command("info")
  .description("Show project information and status")
  .action(() => {
    console.log(chalk.blue.bold("ℹ️  Resume Generator Information\n"));

    const availableTypes = getAvailableConfigTypes();
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

    console.log(chalk.cyan("Project:"), packageJson.name);
    console.log(chalk.cyan("Version:"), packageJson.version);
    console.log(chalk.cyan("Description:"), packageJson.description);

    console.log(chalk.cyan("\nAvailable Resume Types:"), availableTypes.length);
    availableTypes.forEach((type) => {
      console.log(chalk.gray("  -"), type);
    });

    // Check if build exists
    const buildExists = fs.existsSync("dist");
    console.log(
      chalk.cyan("\nBuild Status:"),
      buildExists ? chalk.green("✓ Built") : chalk.red("✗ Not built"),
    );

    if (!buildExists) {
      console.log(
        chalk.yellow("Run"),
        chalk.cyan("npm run build"),
        chalk.yellow("to build the project"),
      );
    }

    // Check output directory
    const outputExists = fs.existsSync("resumes");
    console.log(
      chalk.cyan("Output Directory:"),
      outputExists ? chalk.green("✓ Exists") : chalk.gray("✗ Not created"),
    );

    if (outputExists) {
      const files = fs
        .readdirSync("resumes")
        .filter((f) => f.endsWith(".html"));
      console.log(chalk.cyan("Generated Resumes:"), files.length);
      files.forEach((file) => {
        console.log(chalk.gray("  -"), file);
      });
    }
  });

// Clean command
program
  .command("clean")
  .description("Clean generated files and build output")
  .option("--build", "Clean build output (dist/)")
  .option("--resumes", "Clean generated resumes")
  .option("--all", "Clean everything")
  .action((options) => {
    console.log(chalk.blue.bold("🧹 Cleaning Files\n"));

    const cleanBuild = options.all || options.build;
    const cleanResumes = options.all || options.resumes;

    if (!cleanBuild && !cleanResumes && !options.all) {
      console.log(
        chalk.yellow("No cleaning options specified. Use --help for options."),
      );
      return;
    }

    if (cleanBuild && fs.existsSync("dist")) {
      const spinner = ora("Cleaning build output...").start();
      fs.rmSync("dist", { recursive: true, force: true });
      spinner.succeed("Cleaned build output (dist/)");
    }

    if (cleanResumes && fs.existsSync("resumes")) {
      const spinner = ora("Cleaning generated resumes...").start();
      const files = fs
        .readdirSync("resumes")
        .filter((f) => f.endsWith(".html"));
      files.forEach((file) => fs.unlinkSync(path.join("resumes", file)));
      spinner.succeed(`Cleaned ${files.length} generated resumes`);
    }

    console.log(chalk.green("\n✨ Cleaning completed"));
  });

// Error handling for unknown commands
program.on("command:*", () => {
  console.error(
    chalk.red("Invalid command:"),
    chalk.yellow(program.args.join(" ")),
  );
  console.log(
    chalk.gray("See"),
    chalk.cyan("--help"),
    chalk.gray("for a list of available commands."),
  );
  process.exit(1);
});

// Custom help
program.on("--help", () => {
  console.log("");
  console.log(chalk.blue.bold("Examples:"));
  console.log("  $ resume-gen generate blockchain");
  console.log("  $ resume-gen all --output ./output");
  console.log("  $ resume-gen list");
  console.log("  $ resume-gen dev --port 8080");
  console.log("  $ resume-gen info");
  console.log("");
  console.log(chalk.blue.bold("Resume Types:"));
  try {
    const types = getAvailableConfigTypes();
    types.forEach((type) => console.log(`  • ${type}`));
  } catch (error) {
    console.log('  Run "resume-gen list" to see available types');
  }
});

// Parse arguments
program.parse();

// Default action (show help if no command provided)
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
