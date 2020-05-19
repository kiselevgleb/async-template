import GameSavingLoader from '../gameSavingLoader';

let testData = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

test('should work with promise and async/await', async () => {
  const d = await GameSavingLoader.load();
  expect(d).toEqual(testData);
});
