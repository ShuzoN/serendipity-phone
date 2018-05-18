HUGO = $(shell which hugo)
THEME = 'hugo-creative-portfolio-theme'

server:
	$(HUGO) server -t $(THEME) -w

build:
	$(HUGO) -t $(THEME)
