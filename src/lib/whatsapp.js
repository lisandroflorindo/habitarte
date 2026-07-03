const rawWhatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? '5493765400921'

const defaultGeneralMessage =
  import.meta.env.VITE_WHATSAPP_MESSAGE ??
  'Hola Habitarte! quiero hacerles una consulta.'

const normalizedWhatsappNumber = rawWhatsappNumber.replace(/\D/g, '')

export function buildWhatsAppHref(message = defaultGeneralMessage) {
  if (!normalizedWhatsappNumber) {
    return '#contacto'
  }

  return `https://wa.me/${normalizedWhatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildServiceWhatsAppHref(serviceName) {
  return buildWhatsAppHref(
    `Hola Habitarte! quisiera consultar por el servicio de ${serviceName}.`,
  )
}

export function getGeneralWhatsAppHref() {
  return buildWhatsAppHref(defaultGeneralMessage)
}
