---
order: 18
title: Firmware
---

# 17. Firmware

> TODO Offer default firmware.

> TODO Mention "flash"

> TODO Mention ZMK Studio

1. Connect the keyboard to your computer.

    ![TODO](/docs/firmware/step-1.png)

2. Double-tap the reset button within 500ms.
    * The keyboard should appear as a USB drive called `NICENANO`.

    ![TODO](/docs/firmware/step-2.png)

3. Copy the `.uf2` file into the mounted drive.
    * An error may be reported after copying the file, but [this is expected](https://zmk.dev/docs/troubleshooting/flashing-issues#file-transfer-error) and can be ignored.
    * Once flashed, the drive will disappear and the keyboard will restart automatically.
