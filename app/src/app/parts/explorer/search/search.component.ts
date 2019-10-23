import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, map, switchMap, first, take, filter, skipWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    // styleUrls: ['./search.component.scss']
    host: {
        class: 'search'
    }
})
export class SearchComponent implements OnInit {

    // Компонент работает только с параметром маршрута
    // Берем из поля актуальное значение и передаем в маршрут

    currentInputValue = null;

    @ViewChild('searchInput', { static: true })
    inputValue: NgModel;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {

        this.route.queryParams.pipe(
            filter(q => !!q.search),
            first()
        ).subscribe(params => {
            this.currentInputValue = params.search;
        })

        this.inputValue.update.pipe(
            distinctUntilChanged(),
            debounceTime(200),
        ).subscribe(a => {

            this.router.navigate([], { queryParams: { search: a } });

        });


    }

}
