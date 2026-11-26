# WaveSites wordmark

`wordmark.png` is the actual WaveSites public header artwork, including the wave
mark, used here to identify Hotbrain's own product.

- Source: https://wavesites.cloud/media/media_4e3aea769150b293f32907ed00000001/large.png
- Retrieved: 26 November 2026
- Original dimensions: 912 × 160 pixels
- Stored locally rather than hotlinked so the Hotbrain showcase has no runtime
  dependency on WaveSites media delivery.

The lettering is rendered artwork, not a bundled font. The Wave source identifies
the lettering as Manrope by The Manrope Project Authors, licensed under the
SIL Open Font License 1.1; that license does not apply to documents created using
the font.


`wordmark-green.svg` is a local color-only adaptation of the same transparent
PNG, using its original alpha channel to preserve the filled Wave lettering,
outlined Sites lettering and wave mark exactly. The forest green (#205c47)
is the Wave theme's `--brand` token in `src/styles/site.css` of the
[drewclifton/wave repository](https://github.com/drewclifton/wave/blob/main/src/styles/site.css).
The source PNG remains unchanged. The SVG is self-contained and requires no
external fonts, media or script.
