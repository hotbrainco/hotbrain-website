# Hotbrain Website

The public website of Hotbrain Digital Services Corp. presents technology consulting, internal product development and R&D, and managed cloud hosting.

## Local development

No build step or JavaScript runtime is required. From the repository root, run:

```sh
python -m http.server 8000
```

Open http://localhost:8000/ and http://localhost:8000/terms-privacy.html. Both pages share `styles.css` and a dependency-free responsive layout.

## Design and assets

- Monochrome editorial design using system fonts, grayscale photography and original SVG linework.
- Homepage: `index.html`; legal page: `terms-privacy.html`; shared stylesheet: `styles.css`.
- Asset provenance and illustration notes: [editorial asset notes](assets/images/editorial/README.md).
- WaveSites branding: [product asset notes](assets/images/wavesites/README.md).

The homepage uses an honest direct email link to hello@hotbrain.co; no message is submitted by the site itself. There is no simulated form submission.

## Review checklist

- Review both pages at narrow (320–390px), tablet and desktop widths; verify no horizontal overflow, image framing, typography and navigation.
- Verify local assets, section links (including legacy section IDs), legal page, WaveSites link, LinkedIn and email link.
- Tab through the page, confirm visible focus and skip links, and verify the layout remains usable with JavaScript disabled.
- Check contrast and logo readability. The existing stock images and brand assets remain in the repository even if not used in the redesigned homepage.
