export const site = {
  name: "Summer Tech",
  legalName: "Summer Tech Maintenance Solutions W.L.L",
  phone: "+974 1234 5678",
  whatsapp: "+974 1234 5678",
  whatsappNumber: "97412345678",
  email: "info@summertech.com",
  location: "Doha, State of Qatar",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
