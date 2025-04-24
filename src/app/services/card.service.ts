import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  private getTodaysDate(): string {
    const date = new Date();
    const day = this.padZero(date.getDate());
    const month = this.padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  private getDaysDiff(firstDate: string, lastDate: string): number {
    const f1 = new Date(firstDate);
    const f2 = new Date(lastDate);
    f1.setHours(0, 0, 0, 0);
    f2.setHours(0, 0, 0, 0);
  
    const msDif = Math.abs(f2.getTime() - f1.getTime());
    const dayMs = 1000 * 60 * 60 * 24;
  
    return Math.floor(msDif / dayMs);
  }


  public getTotalDownloads(releasedDate: string, packageName: string) {
    const todaysDate = this.getTodaysDate();
    return this.http.get(`https://api.npmjs.org/downloads/range/${releasedDate}:${todaysDate}/${packageName}`).pipe(
      map((data: any) => 
        data.downloads.reduce((sum: number, d: any) => sum + d.downloads, 0)
      )
    );
  }

  public getExtraInfo(packageName: string) {
    return this.http.get(`https://registry.npmjs.org/${packageName}`).pipe(
      map((data: any) => {
        const sizeInBytes = data.versions[data['dist-tags'].latest].dist.unpackedSize;
        const lastDayModifiedTimeStamps = data.time.modified;
        const dayModified = lastDayModifiedTimeStamps.split('T')[0];


        const daysDiff = this.getDaysDiff(dayModified, this.getTodaysDate());
        const version = data['dist-tags'].latest;
        const sizeInKb = Math.floor(sizeInBytes / 1000);
        return { daysDiff, version, sizeInKb }
      })

    );
  }

}
