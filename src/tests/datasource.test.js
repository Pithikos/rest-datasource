const datasource = require('../DataSource');

test('infer type from Grafana types', () => {
  expect(datasource.getType("time", ["0"])).toBe("time");
  expect(datasource.getType("number", ["0"])).toBe("number");
});


test('support explictly given types', () => {
  expect(datasource.getType("whatever:time", ["0"])).toBe("time");
  expect(datasource.getType("whatever:number", ["0"])).toBe("number");

});


test('fallback to actual type', () => {
  expect(datasource.getType("whatever", ["0"])).toBe("string");
  expect(datasource.getType("whatever", [0])).toBe("number");
});
