import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://randomuser.me/api", ({ request }) => {
    return HttpResponse.json({
      result: [
        {
          name: {
            title: "Miss",
            first: "Avrora",
            last: "Kanibolockiy",
          },
        },
      ],
    });
  }),
];
