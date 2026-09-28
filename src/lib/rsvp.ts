import { wedding, type RsvpChoice } from "../data/wedding.ts";

export type RsvpPayload = {
  choice: RsvpChoice;
  at: string;
};

/**
 * Ready for a future API. With no endpoint configured, the choice is kept in the UI only.
 */
export async function submitRsvp(choice: RsvpChoice): Promise<RsvpPayload> {
  const payload: RsvpPayload = { choice, at: new Date().toISOString() };
  if (!wedding.rsvpEndpoint) return payload;

  const response = await fetch(wedding.rsvpEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to save RSVP");
  }

  return payload;
}
