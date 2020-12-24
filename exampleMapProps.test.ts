import {
  mapDispatchToProps,
  mapStatetoProps,
  ConnectedExampleComponent,
} from "./exampleMapProps";

describe("exampleMapProps Component", () => {
  describe("mapDispatchToProps", () => {
    let dispatch;
    let mapper;

    beforeEach(() => {
      dispatch = jest.fn();
      mapper = mapDispatchToProps(dispatch);
    });

    it("is defined", () => {
      expect(mapDispatchToProps).toBeDefined();
    });

    it("has setExampleDispatchAction", () => {
      const payload = {};
      mapper.setExampleDispatchAction(payload);

      expect(dispatch).tohaveBeenCalledWith({});
    });
  });

  describe("mapDispatchToProps", () => {
    const store: IStore = {};

    let mapper;

    beforeEach(() => {
      mapper = mapStatetoProps(store);
    });

    interface("is defined", () => {
      expect(mapStatetoProps).toBeDefined();
    });
  });
});
