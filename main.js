const blockize = () => {
  const style = document.createElement("style");
  style.id = "blockStyle";
  style.textContent = `
    *, *::before, *::after {
      border-radius: 0px !important;
    }
  `;

  if (!document.getElementById("blockStyle")) {
    document.head.appendChild(style);
  }

  const removedMaskIds = [];

  document.querySelectorAll("mask").forEach((mask) => {
    mask.querySelectorAll("circle").forEach((circle) => circle.remove());
    removedMaskIds.push(mask.id);
  });

  document.querySelectorAll("[mask]").forEach((el) => {
    const maskAttr = el.getAttribute("mask");
    if (!maskAttr || !maskAttr.startsWith("url(#")) return;

    const maskId = maskAttr.match(/url\(#(.+)\)/)?.[1];
    if (maskId && removedMaskIds.includes(maskId)) {
      el.removeAttribute("mask");
    }
  });

  const observer = new MutationObserver(() => {
    const removedMaskIds = [];

    document.querySelectorAll("mask").forEach((mask) => {
      mask.querySelectorAll("circle").forEach((circle) => circle.remove());
      removedMaskIds.push(mask.id);
    });

    document.querySelectorAll("[mask]").forEach((el) => {
      const maskAttr = el.getAttribute("mask");
      if (!maskAttr || !maskAttr.startsWith("url(#")) return;

      const maskId = maskAttr.match(/url\(#(.+)\)/)?.[1];
      if (maskId && removedMaskIds.includes(maskId)) {
        el.removeAttribute("mask");
      }
    });
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
  });

  setInterval(() => {
    const removedMaskIds = [];

    document.querySelectorAll("mask").forEach((mask) => {
      mask.querySelectorAll("circle").forEach((circle) => circle.remove());
      removedMaskIds.push(mask.id);
    });

    document.querySelectorAll("[mask]").forEach((el) => {
      const maskAttr = el.getAttribute("mask");
      if (!maskAttr || !maskAttr.startsWith("url(#")) return;

      const maskId = maskAttr.match(/url\(#(.+)\)/)?.[1];
      if (maskId && removedMaskIds.includes(maskId)) {
        el.removeAttribute("mask");
      }
    });
  }, 500);
};

blockize();
