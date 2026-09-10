export const site = {
  name: "Summer Tech",
  legalName: "Summer Tech Maintenance Solutions W.L.L",
  phone: "+974 30771718",
  secondaryPhone: "+974 70294141",
  phones: ["+974 30771718", "+974 70294141"] as const,
  whatsapp: "+974 30771718",
  whatsappSecondary: "+974 70294141",
  whatsappNumber: "97430771718",
  whatsappSecondaryNumber: "97470294141",
  email: "info@summertech.com",
  location: "Doha, State of Qatar",
  social: {
    instagram: "https://www.instagram.com/summer__tech?stkn=dTkwYWV3bjA0NXdv&utm_source=qr",
    facebook: "https://www.facebook.com/share/182yqGjjQA/?mibextid=wwXIfr",
  },
};

export function waLink(message: string, number?: string) {
  const target = number ? number.replace(/[^0-9]/g, "") : site.whatsappNumber;
  return `https://wa.me/${target}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string = site.phone) {
  return `tel:${number.replace(/\s+/g, "")}`;
}
