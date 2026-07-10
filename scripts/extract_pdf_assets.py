from pathlib import Path
import subprocess

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/asifkhan/Downloads/Profile-3.pdf")
ASSETS = ROOT / "src" / "assets"
TMP = Path("/private/tmp/astral_pdf_assets_build")
PDFTOPPM = Path("/Users/asifkhan/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pdftoppm")


def save_web_image(source, target, max_size=(1800, 1400)):
  with Image.open(source) as image:
    image = image.convert("RGB")
    image.thumbnail(max_size)
    image.save(target, quality=88, optimize=True)


def main():
  ASSETS.mkdir(parents=True, exist_ok=True)
  TMP.mkdir(parents=True, exist_ok=True)

  reader = PdfReader(str(PDF))
  for page_index, page in enumerate(reader.pages, start=1):
    for image_index, image in enumerate(getattr(page, "images", []), start=1):
      name = f"pdf-page-{page_index:02d}-image-{image_index:02d}{Path(image.name).suffix or '.jpg'}"
      (TMP / name).write_bytes(image.data)

  asset_map = {
    "pdf-page-01-image-01.jpg": "hero-pool.jpg",
    "pdf-page-08-image-01.jpg": "hdpe-work.jpg",
    "pdf-page-09-image-01.jpg": "pool-maintenance.jpg",
    "pdf-page-10-image-01.jpg": "equipment-room.jpg",
    "pdf-page-12-image-01.jpg": "site-service.jpg",
    "pdf-page-14-image-01.jpg": "project-marassi-park.jpg",
    "pdf-page-14-image-02.jpg": "project-marassi-shore.jpg",
    "pdf-page-14-image-03.jpg": "project-dana-mall.jpg",
    "pdf-page-14-image-04.jpg": "project-iraq-embassy.jpg",
    "pdf-page-15-image-01.jpg": "project-kingdom-mall.jpg",
    "pdf-page-15-image-02.jpg": "project-bahrain-kuwait-embassy.jpg",
    "pdf-page-15-image-03.jpg": "project-riffa-views.jpg",
    "pdf-page-15-image-04.jpg": "project-youth-sports.jpg",
    "pdf-page-16-image-01.jpg": "contact-pool.jpg",
  }

  for source_name, target_name in asset_map.items():
    source = TMP / source_name
    if source.exists():
      save_web_image(source, ASSETS / target_name)

  if PDFTOPPM.exists():
    subprocess.run(
      [str(PDFTOPPM), "-f", "16", "-l", "16", "-png", "-r", "220", str(PDF), str(TMP / "render")],
      check=True,
    )
    contact = TMP / "render-16.png"
    with Image.open(contact) as image:
      image = image.convert("RGBA")
      width, height = image.size
      logo = image.crop((int(width * 0.17), int(height * 0.585), int(width * 0.52), int(height * 0.675)))
      logo.save(ASSETS / "astral-logo.png", optimize=True)

  print(f"Extracted Astral website assets to {ASSETS}")


if __name__ == "__main__":
  main()
