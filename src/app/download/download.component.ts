import { Component, OnInit } from "@angular/core";
import { DownloadService } from "./download.service";
import { saveAs } from "file-saver";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.css"],
})
export class DownloadComponent implements OnInit {
  constructor(private service: DownloadService) {}

  ngOnInit(): void {}

  async download() {
    // this.service.download().subscribe((blob) => {
    //   const a = document.createElement("a");
    //   const objectUrl = URL.createObjectURL(blob);
    //   a.href = objectUrl;
    //   a.download = "archive.zip";
    //   a.click();
    //   URL.revokeObjectURL(objectUrl);
    // });
    try {
      this.service.download().subscribe((blob) => saveAs(blob, "archive.zip"));
    } catch (e) {
      console.log(e);
    }
  }
}
