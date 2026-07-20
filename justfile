# Build specific resume (e.g., `just build baseline`)
build name:
	mkdir -p gen/resumes
	typst compile --root . gen/typst/{{name}}.typ gen/resumes/{{name}}.pdf

# Build all resumes
all:
	mkdir -p gen/resumes
	@for f in gen/typst/*.typ; do \
		name=$$(basename "$$f" .typ); \
		typst compile --root . "$$f" "gen/resumes/$$name.pdf"; \
	done

# Clean generated PDFs
clean:
	rm -f gen/resumes/*.pdf
