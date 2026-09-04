export const site = {
  name: "Summer Tech",
  legalName: "Summer Tech Maintenance Solutions W.L.L",
  phone: "+973 1234 5678",
  whatsapp: "+973 1234 5678",
  whatsappNumber: "97312345678",
  email: "info@summertech.com",
  location: "Manama, Kingdom of Bahrain",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
