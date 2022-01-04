const ics = require("ics");
const sendgrid = require("@sendgrid/mail");

const event = {
  start: [2022, 1, 30, 6, 30],
  duration: { hours: 1, minutes: 00 },
  title: "Bolder Boulder",
  description: "",
  location: "",
  url: "",
  geo: { },
  categories: ["Test", "Hair Salon", "Hair By Dian"],
  status: "CONFIRMED",
  busyStatus: "BUSY",
  organizer: { name: "Admin", email: "el478704@gmail.com" },
  attendees: [
    {
      name: "Edison Li",
      email: "edison4354@gmail.com",
      rsvp: true,
      partstat: "ACCEPTED",
      role: "REQ-PARTICIPANT",
    },
  ],
};

const { value } = ics.createEvent(event);

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

sendgrid.send({
  to: "edisonli2003@gmail.com",
  from: "el478704@gmail.com",
  subject: "Hair Salon Appointment",
  content: [
    {
      type: "text/plain",
      value: "Plain Content",
    },
    {
      type: "text/html",
      value: "HTML Content",
    },
    {
      type: "text/calendar; method=REQUEST",
      value: value,
    },
  ],
  attachments: [
    {
      content: Buffer.from(value).toString("base64"),
      type: "application/ics",
      name: "invite.ics",
      filename: "invite.ics",
      disposition: "attachment",
    },
  ],
});