import { SavedListModule } from './saved-list.module';

describe('SavedListModule', () => {
    let savedListModule: SavedListModule;

    beforeEach(() => {
        savedListModule = new SavedListModule();
    });

    it('should create an instance', () => {
        expect(savedListModule).toBeTruthy();
    });
});
