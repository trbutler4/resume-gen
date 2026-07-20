import * as fs from "fs";
import * as path from "path";
import { getConfig, getAvailableConfigTypes } from "./config";

export function exportConfigToJson(configType: string, outputPath: string): void {
  const config = getConfig(configType);
  const jsonData = JSON.stringify(config, null, 2);
  fs.writeFileSync(outputPath, jsonData);
  console.log(`Exported ${configType} config to ${outputPath}`);
}

export function exportAllConfigsToJson(outputDir: string): void {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const configTypes = getAvailableConfigTypes();
  for (const configType of configTypes) {
    const outputPath = path.join(outputDir, `${configType}.json`);
    exportConfigToJson(configType, outputPath);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const outputDir = args[0] || "typst/data";
  exportAllConfigsToJson(outputDir);
}
