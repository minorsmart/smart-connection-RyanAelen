function generateTimelineCard(point, meta, imgSrc, imgAlt, title, desc, pointFirst) {
  var pointbox = "";
  const pointerhtml = `<div class="js-timeline-card_point-box ag-timeline-card_point-box">
  <div class="ag-timeline-card_point">${point}</div>
</div>`;
  const metahtml = `
<div class="ag-timeline-card_meta-box">
  <div class="ag-timeline-card_meta">${meta}</div>
</div>`;
  pointbox = pointFirst ? pointerhtml + metahtml : metahtml + pointerhtml;


  return `
      <div class="js-timeline_item ag-timeline_item">
        <div class="ag-timeline-card_box">
        ${pointbox}
        </div>
        <div class="ag-timeline-card_item">
          <div class="ag-timeline-card_inner">
            <div class="ag-timeline-card_img-box">
              <img src="${imgSrc}" class="ag-timeline-card_img" alt="${imgAlt}" width="640" height="360" />
            </div>
            <div class="ag-timeline-card_info">
              <div class="ag-timeline-card_title">${title}</div>
              <div class="ag-timeline-card_desc">${desc}</div>
            </div>
          </div>
          <div class="ag-timeline-card_arrow"></div>
        </div>
      </div>
    `;
}


for (let i = 0; i < timelineCards.length; i++) {
  const pointFirst = i % 2 === 0 ? true : false;
  const timelineCardHtml = generateTimelineCard(
    timelineCards[i].point,
    timelineCards[i].meta,
    timelineCards[i].imgSrc,
    timelineCards[i].imgAlt,
    timelineCards[i].title,
    timelineCards[i].desc,
    pointFirst
  );
  $(".timeline-container").append(timelineCardHtml);
}