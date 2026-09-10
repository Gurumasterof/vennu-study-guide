// PDF Export Utilities for Vaa Macha Vettiya Irukala App

window.exportPdfDocument = function({ title, subtitle, university, subject, items, type }) {
  // Create a clean printable HTML element for PDF render
  const container = document.createElement("div");
  container.id = "pdf-export-container";
  container.style.padding = "40px";
  container.style.fontFamily = "'Segoe UI', Roboto, Helvetica, sans-serif";
  container.style.color = "#1e293b";
  container.style.backgroundColor = "#ffffff";
  container.style.maxWidth = "800px";
  container.style.margin = "0 auto";

  const headerHtml = `
    <div style="border-bottom: 2px solid #6366f1; padding-bottom: 15px; margin-bottom: 25px; text-align: center;">
      <h1 style="color: #4f46e5; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">Vaa Macha Vettiya Irukala! 🎓</h1>
      <p style="color: #64748b; margin: 5px 0 0 0; font-size: 13px;">Official Exam Revision & Study Document</p>
      <div style="display: flex; justify-content: space-between; margin-top: 15px; background: #f8fafc; padding: 10px 15px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #334155;">
        <span><strong>University:</strong> ${university || 'General University'}</span>
        <span><strong>Subject:</strong> ${subject || 'Custom Syllabus'}</span>
        <span><strong>Date:</strong> ${new Date().toLocaleDateString()}</span>
      </div>
    </div>
    <div style="background: #eef2ff; border-left: 4px solid #6366f1; padding: 12px 16px; margin-bottom: 25px; border-radius: 0 6px 6px 0;">
      <h2 style="margin: 0; color: #3730a3; font-size: 18px;">${title}</h2>
      <p style="margin: 4px 0 0 0; color: #4338ca; font-size: 13px;">${subtitle}</p>
    </div>
  `;

  let bodyHtml = "";

  items.forEach((item, index) => {
    const badgeStyle = item.type === "2-Mark" 
      ? "background: #dbeafe; color: #1e40af;" 
      : (item.frequency ? "background: #fef3c7; color: #92400e;" : "background: #e0e7ff; color: #3730a3;");

    bodyHtml += `
      <div style="margin-bottom: 22px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; page-break-inside: avoid;">
        <div style="background: #f1f5f9; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0;">
          <span style="font-weight: 700; color: #0f172a; font-size: 14px;">Q${index + 1}. [${item.unit || 'General'}] ${item.question}</span>
          <span style="padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 700; white-space: nowrap; ${badgeStyle}">
            ${item.type || item.frequency || 'Important'}
          </span>
        </div>
        <div style="padding: 15px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-line; background: #fafafa;">
          <strong style="color: #475569; display: block; margin-bottom: 6px;">Answer / Model Solution:</strong>
          ${item.answer}
        </div>
      </div>
    `;
  });

  const footerHtml = `
    <div style="margin-top: 40px; border-top: 1px dashed #cbd5e1; padding-top: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
      Generated with ❤️ by <strong>Vaa Macha Vettiya Irukala App</strong> • All rights reserved • Share with your college machas!
    </div>
  `;

  container.innerHTML = headerHtml + bodyHtml + footerHtml;
  document.body.appendChild(container);

  // If html2pdf library is available, use it for seamless PDF download
  if (window.html2pdf) {
    const opt = {
      margin:       [0.4, 0.4, 0.4, 0.4],
      filename:     `${title.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    window.html2pdf().set(opt).from(container).save().then(() => {
      document.body.removeChild(container);
    }).catch(err => {
      console.error("PDF Export error:", err);
      // Fallback print window
      window.print();
      document.body.removeChild(container);
    });
  } else {
    // Fallback: Open print dialog for PDF saving
    const printWin = window.open('', '', 'width=800,height=900');
    printWin.document.write('<html><head><title>' + title + '</title>');
    printWin.document.write('</head><body>');
    printWin.document.write(container.innerHTML);
    printWin.document.write('</body></html>');
    printWin.document.close();
    printWin.focus();
    setTimeout(() => {
      printWin.print();
      printWin.close();
      document.body.removeChild(container);
    }, 500);
  }
};
