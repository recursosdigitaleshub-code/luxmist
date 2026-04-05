# Especificaciones de Despliegue: LuxMist

## 1. Plataforma de Hosting
- **Servicio**: GitHub Pages (gratuito)
- **Tipo**: Sitio estatico (HTML/CSS/JS sin build)
- **HTTPS**: Incluido automaticamente

## 2. Metodo de despliegue: curl + GitHub API REST
Seguir el skill `deployment-expert.md` para:
1. Crear repo `luxmist` via API
2. Pushear contenido de `LuxMist/`
3. Activar Pages con `build_type: workflow`
4. Verificar deploy via API

## 3. Workflow
Archivo: `.github/workflows/deploy.yml` — standard artifact-based.

## 4. Checklist Pre-Despliegue
- [ ] index.html carga correctamente local
- [ ] Toggle FR/EN funciona sin recarga
- [ ] Responsive: 375px, 768px, 1200px+
- [ ] CTAs visibles y funcionales
- [ ] Formulario valida campos
- [ ] WhatsApp link funciona
- [ ] Favicon y OG tags correctos
- [ ] Seccion de ingresos es legible y persuasiva

## 5. Formulario de Contacto
**Estado**: Solo validacion cliente. No envia datos.
Opciones futuras: Formspree, EmailJS, o webhook a CRM.
