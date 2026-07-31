---
order: 7
title: Microcontroller
---

# 7. Microcontroller

![nice!nano overview](/docs/microcontroller/microcontroller-overview.png)

Solder the pin headers to the nice!nano so it can plug into the Mill-Max sockets.

> **Warning:** Keep the iron at **270–300 °C** for this step. Higher temperatures can damage the nRF52840 chip on the nice!nano.
>
> **Important:** The **top hole** of the nice!nano footprint (closest to the battery connector) **must be left empty**. Do **not** insert a pin header there. The battery connector will occupy that space and will not have a pin header going through it.

1. Insert the two 12-pin pin headers (short side down) into the Mill-Max sockets on the PCB. Leave the top hole (nearest the battery connector footprint) empty on both sockets.
   ![nice!nano positioned with pin headers](/docs/microcontroller/microcontroller-positioned-pin-header.png)
2. Place the nice!nano **face down** (components and logo facing down, away from you) onto the pin headers.
   ![nice!nano positioned](/docs/microcontroller/microcontroller-positioned.png)
3. Check that the USB-C port sits at the edge of the PCB.
4. Solder the two corner pins first while keeping the nice!nano flat and flush.
   ![nice!nano soldered extremities](/docs/microcontroller/microcontroller-soldered-extremities.png)
5. Solder the remaining 22 pins.
   ![nice!nano soldered](/docs/microcontroller/microcontroller-soldered.png)
6. Lift the nice!nano straight up to remove it from the sockets. Pull evenly from both sides to avoid bending pins.
   ![nice!nano removal](/docs/microcontroller/microcontroller-removal.png)
   ![nice!nano removed](/docs/microcontroller/microcontroller-removed.png)

> **Tip:** Use a piece of Kapton tape to hold the nice!nano down while soldering the corner pins if it tends to shift.

> **Verify:** All 24 pins soldered, no bridges. The nice!nano seats snugly into the sockets and can be removed and reinserted cleanly.
