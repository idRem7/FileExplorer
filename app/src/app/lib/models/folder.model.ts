import { File } from './file.model';

export class Folder {
    name: string = '';
    content: Array<File | Folder> = [];
    isHide: boolean = false;


    static createFrom(protopype: any): Folder {
        let folder = new Folder();

        folder.name = protopype.name;
        folder.content = protopype.content.map(
            el => el.isFolder ? Folder.createFrom(el) : File.createFrom(el)
        );
        folder.sort();

        return folder;
    }

    sort() {
        this.content.sort((a, b) => {
            let isFolderA = a instanceof Folder;
            let isFolderB = b instanceof Folder;

            if (isFolderA && isFolderB) {
                if (a.name < b.name) {
                    return -1;
                } else {
                    return 1;
                }
            }

            if (isFolderA && !isFolderB) {              
                return -1;
            }

            if (!isFolderA && isFolderB) {
                return 1;
            }
            
            if (!isFolderA && !isFolderB) { 
                if (a.name < b.name) {
                    return -1;
                } else {
                    return 1;
                }
            }

            return 0;

        });
    }
}