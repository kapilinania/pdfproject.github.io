const dataTitleElement = document.getElementById('dataTitle');
const dataSubtitleElement = document.getElementById('dataSubtitle');
const dataDescriptionElement = document.getElementById('dataDescription');
const dataImageElement = document.getElementById('dataImage');

const editTab = document.getElementById('edit');
const mergeTab = document.getElementById('merge');
const createTab = document.getElementById('create');
const esignTab = document.getElementById('esign');
const ocrTab = document.getElementById('ocr');
const mergeDataDiv = document.getElementById('mergeData');

// Data and image sources for each menu item
const menuItems = {
  edit: {
    title: 'Edit',
    subtitle: 'Edit your documents effortlessly',
    description: 'Edit your PDFs with our easy-to-use tools. Add, delete, or modify text and images, insert, extract or rotate pages, and more.',
    imageSrc: 'https://www.sodapdf.com/soda-lp-static/dist/images/MainPageRedesign/edit-en.webp'
  },
  merge: {
    title: 'Merge & Compress',
    subtitle: 'Shape your documents without losing their form',
    description: 'Merge various file types like Word, Excel & PowerPoint into a PDF. Rearrange or delete pages from your PDFs with ease and compress PDFs to a smaller file size without losing quality',
    imageSrc: 'https://www.sodapdf.com/soda-lp-static/dist/images/MainPageRedesign/merge&compress-en.webp'
  },
  create: {
    title: 'Create & Convert',
    subtitle: 'Create PDFs from scratch and convert to various formats',
    description: 'Create professional-looking PDFs from blank pages or start from various file formats. Convert PDFs to Word, Excel, PowerPoint, HTML, and image formats with ease.',
    imageSrc: 'https://www.sodapdf.com/soda-lp-static/dist/images/MainPageRedesign/create&cnvert-en.webp'
  },
  esign: {
    title: 'E-Sign',
    subtitle: 'Sign your documents electronically',
    description: 'Electronically sign your PDFs and other documents with our e-signature tool. Use a signature image or draw your signature with the mouse or touch screen.',
    imageSrc: 'https://www.sodapdf.com/soda-lp-static/dist/images/MainPageRedesign/e-sign-en.webp'
  },
  ocr: {
    title: 'OCR',
    subtitle: 'Convert scanned documents into editable text',
    description: 'OCR (Optical Character Recognition) allows you to convert scanned paper documents or images into editable and searchable data. Extract text from scanned documents and images easily.',
    imageSrc: 'https://www.sodapdf.com/soda-lp-static/dist/images/MainPageRedesign/ocr-en.webp'
  }
};

// Function to change data and image inside .onclick_row
function changeDataAndImage(menuItem) {
  const data = menuItems[menuItem];
  dataTitleElement.textContent = data.title;
  dataSubtitleElement.textContent = data.subtitle;
  dataDescriptionElement.textContent = data.description;
  dataImageElement.src = data.imageSrc;
}

// Event listeners for each menu item click
editTab.addEventListener('click', () => changeDataAndImage('edit'));
mergeTab.addEventListener('click', () => changeDataAndImage('merge'));
createTab.addEventListener('click', () => changeDataAndImage('create'));
esignTab.addEventListener('click', () => changeDataAndImage('esign'));
ocrTab.addEventListener('click', () => changeDataAndImage('ocr'));

// Initial data and image display (Merge & Compress data and image by default)
changeDataAndImage('merge');
