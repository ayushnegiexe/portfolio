const windows: Record<string, JSX.Element> = {
  Resume: (
    <div className="grid grid-cols-4 gap-4 p-4">
      <FileIcon name="Resume.pdf" type="pdf" />
    </div>
  ),
  Projects: (
    <div className="grid grid-cols-4 gap-4 p-4">
      <FileIcon name="Project1.js" type="code" />
      <FileIcon name="Project2.js" type="code" />
      <FileIcon name="Portfolio.png" type="image" />
    </div>
  ),
  Skills: (
    <div className="grid grid-cols-4 gap-4 p-4">
      <FileIcon name="Skills.txt" type="text" />
    </div>
  ),
  "About Me": <p>About me content here</p>,
  Contact: <p>Contact form or info here</p>,
  "Download Resume": <p>Download link or PDF here</p>,
  "Portfolio Guide": <p>Guide content here</p>,
};
