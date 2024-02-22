import React from 'react'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';

const Files = () => {
    const fileName = 'Dummy'
    const message = 'Welocome to our Services'
    const download = (type) => {
        if (type === 'pdf') {
            const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.download = `${fileName}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (type === 'excel') {
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet([[message]]);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            FileSaver.saveAs(blob, `${fileName}.xlsx`);
        } else if (type === 'txt') {
            const text = message;
            const blob = new Blob([text], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = `${fileName}.txt`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(a.href);
            document.body.removeChild(a);
        } else if (type === 'json') {
            const messages = { message };
            const json = JSON.stringify(messages);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${fileName}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (type === 'js') {
            const text = message;
            const blob = new Blob([text], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.js`
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else if (type === 'html') {
            const htmlContent = `<!DOCTYPE html>
      <html>
      <head>
      <title>${fileName}</title>
      </head>
      <body>
      <p>${message}</p>
      </body>
      </html>`;
            const element = document.createElement('a');
            const file = new Blob([htmlContent], { type: 'text/html' });
            element.href = URL.createObjectURL(file);
            element.download = `${fileName}.html`
            document.body.appendChild(element);
            element.click();
        } else if (type === 'docx') {
            const content = message;
            const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            saveAs(blob, `${fileName}.docx`);
        } else if (type === 'pptx') {
            const pptxData = new Blob([message], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
            saveAs(pptxData, `${fileName}.pptx`);
        } else if (type = 'csv') {
            const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(message);
            const link = document.createElement("a");
            link.setAttribute("href", csvContent);
            link.setAttribute("download", `${fileName}.csv`);
            document.body.appendChild(link);
            link.click();
        }
    };

    return (
        <div className="row">
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('pdf')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" alt="PDF" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy PDF file with a single click. Test our PDF feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('excel')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://static-00.iconduck.com/assets.00/ms-excel-icon-2048x2026-nws24wyy.png" alt="EXCEL" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy EXCEL file with a single click. Test our EXCEL feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('txt')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://cdn-icons-png.flaticon.com/512/2656/2656402.png" alt="TXT" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy TXT file with a single click. Test our TXT feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('json')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://cdn.iconscout.com/icon/free/png-256/free-json-file-1-504451.png" alt="JSON" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy JSON file with a single click. Test our JSON feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('js')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JS" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy JS file with a single click. Test our JS feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('html')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://cdn.iconscout.com/icon/free/png-256/free-html-file-2330569-1950410.png" alt="HTML" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy HTML file with a single click. Test our HTML feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('docx')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://mailmeteor.com/logos/assets/PNG/Google_Docs_Logo_512px.png" alt="DOCX" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy DOCX file with a single click. Test our DOCX feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('pptx')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://static.vecteezy.com/system/resources/previews/015/081/209/original/pptx-file-format-3d-rendering-isometric-icon-png.png" alt="PPTX" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy PPT file with a single click. Test our PPT feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3 cursor-pointer" onClick={() => download('csv')}>
                <div className="card text-white bg-secondary cursor-pointer">
                    <div className="card-header">
                        <img width='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUHUtjG-lxncEmW748Rvtd2ILmLN6N653zOb-EkL56A&s" alt="CSV" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Download a dummy CSV file with a single click. Test our CSV feature effortlessly. Try it now!</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Files