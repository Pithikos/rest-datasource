const api = require('../api');


test('infer type from Grafana types', () => {
  expect(api.getType("time", ["0"])).toBe("time");
  expect(api.getType("number", ["0"])).toBe("number");
});


test('support explictly given types', () => {
  expect(api.getType("whatever:time", ["0"])).toBe("time");
  expect(api.getType("whatever:number", ["0"])).toBe("number");

});


test('fallback to actual type', () => {
  expect(api.getType("whatever", ["0"])).toBe("string");
  expect(api.getType("whatever", [0])).toBe("number");
});
