import { getAvailableSalutations } from "@shopware-pwa/shopware-6-client";

describe("shopware-6-client - E2E - ContextService - getAvailableCountries", () => {
  it("should test salutations response", async () => {
    const result = await getAvailableSalutations();
    expect(result).toMatchSnapshot();
  });
});
