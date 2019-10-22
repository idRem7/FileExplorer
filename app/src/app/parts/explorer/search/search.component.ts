import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, map, switchMap } from 'rxjs/operators';
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
        this.inputValue.update.pipe(
            distinctUntilChanged(),
            debounceTime(200),
        ).subscribe(a => {

            // Тут просто добавляем параметр запроса из поля ввода
            // а ля ?search=memes.txt
            // Остальные вещи из маршрута не трогаем

            this.router.navigate([], { relativeTo: this.route, queryParams: { search: a } });
            // this.router.navigate(['/', a]);
        });


    }

}
