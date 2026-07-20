# Build specific resume (e.g., `just build baseline`)
build name:
	mkdir -p resumes
	typst compile --root . resumes/{{name}}.typ resumes/{{name}}.pdf

# Build all resumes
all:
	mkdir -p resumes
	@for f in resumes/*.typ; do \
		name=$$(basename "$$f" .typ); \
		typst compile --root . "$$f" "resumes/$$name.pdf"; \
	done

# Clean generated PDFs
clean:
	rm -f resumes/*.pdf
