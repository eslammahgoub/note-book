import { Utils } from '@models/utils';

// Utils Unit test
describe('Utils', () => {

  it('should getFormattedDate Fn return formatted date as YYYY-MM-DD', () => {
    const formattedDate = Utils.getFormattedDate(new Date());

    expect(formattedDate.indexOf('-')).toBeTruthy();
    expect(formattedDate).toBe(new Date().toISOString().slice(0, 10));
  });


  it('should getFormattedDate Fn return formatted date of today if no date as YYYY-MM-DD', () => {
    const formattedDate = Utils.getFormattedDate(null);

    expect(formattedDate.indexOf('-')).toBeTruthy();
    expect(formattedDate).toBe(new Date().toISOString().slice(0, 10));
  });


  it('should generateUUID Fn return string UUID', () => {
    const uid = Utils.generateUUID();

    expect(typeof uid === 'string').toBeTruthy();
  });

  it('should getSortedObjectEntries Fn return sorted list of entries', () => {
    const obj = {a: 1, b: 2};

    const sortedList = Utils.getSortedObjectEntries(obj);

    expect(sortedList.length).toBe(2);
    expect(sortedList[0]).toBe('b');
    expect(sortedList[1]).toBe('a');
  });


  it('should getSortedObjValues Fn return sorted list of values', () => {
    const obj = {a: 1, b: 2};

    const sortedList = Utils.getSortedObjValues(obj);

    expect(sortedList.length).toBe(2);
    expect(sortedList[0]).toBe(2);
    expect(sortedList[1]).toBe(1);
  });

});
