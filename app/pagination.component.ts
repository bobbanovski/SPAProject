import {Component, Input, OnChanges} from 'angular2/core'

@Component({
    selector: 'pagination',
    template: `
    <nav *ngIf="itemArray.length > pageSize">
    <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li *ngFor=#page of pages>
        <a>{{page}}</a>
    </li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
  </nav>
  `
})
export class PaginationComponent implements OnChanges{
    @Input() itemArray = [];
    //@Input('page-size') pageSize = 10;
    pageSize = 10;
    recordNum = 10;
    pages: any[];

    ngOnChanges(){
        var pageNum = this.itemArray.length / this.pageSize;
        this.pages = [];
        for (var i = 1; i <= pageNum; i++)
            this.pages.push(i);
    }
}