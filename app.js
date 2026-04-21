const activityFeed = [
  {
    title: "Marketing campaign exceeded target CTR",
    description: "Spring relaunch delivered a 17% lift in qualified traffic.",
    time: "12 min ago",
    owner: "Growth"
  },
  {
    title: "Two enterprise contracts moved to negotiation",
    description: "Forecast impact: +$24K MRR if closed this week.",
    time: "48 min ago",
    owner: "Sales"
  },
  {
    title: "Checkout response time improved by 210ms",
    description: "Performance fixes reduced abandonment on mobile devices.",
    time: "1 hr ago",
    owner: "Product"
  },
  {
    title: "Support backlog dropped below SLA threshold",
    description: "Median first-response time is now 21 minutes.",
    time: "2 hr ago",
    owner: "Ops"
  }
];

const activityList = document.querySelector("#activity-list");

function renderActivity(items) {
  if (!activityList) {
    return;
  }

  activityList.innerHTML = items
    .map(
      (item) => `
        <article class="activity-item">
          <div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
          <div>
            <strong>${item.owner}</strong>
            <time>${item.time}</time>
          </div>
        </article>
      `
    )
    .join("");
}

renderActivity(activityFeed);
