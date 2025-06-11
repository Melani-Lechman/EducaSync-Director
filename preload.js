const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  cerrarVentana: () => ipcRenderer.send('cerrar-ventana')
});

window.addEventListener('DOMContentLoaded', () => {
  // Preload logic if needed
});
