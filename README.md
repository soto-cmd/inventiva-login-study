# Inventiva login study replica

Proyecto educativo para estudiar y recrear visualmente una pantalla de login observada en una aplicación Oracle APEX.

## Lo que se confirmó del original

- Oracle APEX 23.2.0.
- Aplicación APEX ID 132.
- Página de login 9999.
- Universal Theme / Theme 42.
- Tema `apex-theme-vita-verde`.
- Plugin FOS Advanced Password.
- SweetAlert2.
- PWA / service worker.
- Fondo configurado como archivo estático `Globo-aerostatico.jpg`.

## Archivos

- `original-page-source.html`: snapshot del HTML que fue compartido para el estudio. Se sanitizaron usuario, IDs de sesión y tokens variables antes de guardarlo.
- `index.html`: recreación independiente, sin Oracle APEX.
- `styles.css`: estilos de la recreación.
- `app.js`: comportamiento educativo del formulario.

## Importante

Esta recreación no incluye el backend de Oracle APEX, PL/SQL, autenticación, tablas Oracle ni lógica de servidor del sistema original, porque esos componentes no están contenidos en el HTML que recibe el navegador.

La réplica no intenta iniciar sesión en el sistema real y debe mantenerse separada de credenciales, cookies, sesiones o datos corporativos.

## Fondo

Por motivos de portabilidad, el CSS espera un archivo opcional llamado `background-placeholder.jpg`. Podés reemplazarlo por una imagen propia para practicar.

## Ejecutar localmente

Abrí `index.html` directamente en el navegador o iniciá un servidor local, por ejemplo:

```bash
python -m http.server 8000
```

Luego visitá `http://localhost:8000`.
