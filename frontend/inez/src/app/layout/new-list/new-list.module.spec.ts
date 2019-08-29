import { NewListModule } from './new-list.module';

describe('NewListModule', () => {
    let newListModule: NewListModule;

    beforeEach(() => {
        newListModule = new NewListModule();
    });

    it('should create an instance', () => {
        expect(newListModule).toBeTruthy();
    });
});
