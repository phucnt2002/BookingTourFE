import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionLimit'
})
export class DescriptionLimitPipe implements PipeTransform {
  transform(value: string, maxWords: number = 30): string {
    if (!value || !value.trim()) {
      return '';
    }

    const words = value.trim().split(/\s+/);
    if (words.length <= maxWords) {
      return value;
    }

    return words.slice(0, maxWords).join(' ') + '...';
  }
}
