"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "Bitte alle Pflichtfelder ausfüllen." };
  }

  if (!email.includes("@")) {
    return { success: false, error: "Bitte eine gültige E-Mail-Adresse eingeben." };
  }

  // TODO: integrate email service (e.g. Resend, Nodemailer, SendGrid)
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'noreply@kompetenz-pferd.at',
  //   to: 'bernadette-fischl@gmx.at',
  //   subject: `Neue Anfrage von ${name}`,
  //   text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  // })

  console.log("Contact form submission:", { name, email, message });

  return { success: true };
}
