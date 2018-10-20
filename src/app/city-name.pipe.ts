import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'CityNamePipe',
    pure: false
})
export class CityNamePipe implements PipeTransform {
    transform(value: any, filterText: string): any {
        if (!value) return [];
        if (!filterText) return value;
        filterText = filterText.toLowerCase();
        return value.filter(it => {
            return it.name.toLowerCase().includes(filterText);
        });
    }
}