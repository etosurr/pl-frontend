import { Component, OnInit } from '@angular/core';
import {FilesystemService, PathContentResponse} from '../filesystem.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public currentPathContent: PathContentResponse[];
  public oldPath: string[] = [];
  public currentPath = '/';

  constructor(private filesystemService: FilesystemService) { }

  public ngOnInit() {
    this.getContent();
  }

  public back() {
    this.currentPath = this.oldPath[this.oldPath.length - 1];
    this.oldPath.splice(this.oldPath.length - 1, 1);
    this.getContent();
  }

  public route(directory: string) {
    this.oldPath.push(this.currentPath);
    this.currentPath += directory + '/';
    this.getContent();
  }

  private getContent() {
    this.filesystemService.getPathContent(this.currentPath).subscribe((content: PathContentResponse[]) => {
      this.currentPathContent = content;
    });
  }
}
