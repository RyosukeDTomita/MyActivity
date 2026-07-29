import { test, expect } from '@playwright/test';
import { translations } from '../src/translations/translations';

const LANGUAGES = ['ja', 'en'] as const;

// 期待値はtranslations.tsから引くため、文面を編集してもテストは壊れない。
// 検証するのはProfile/Activitiesが選択中の言語で描画されることのみ
for (const language of LANGUAGES) {
  const t = translations[language].profile;

  test.describe(`${language}表示`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/MyActivity/');
      // 初期表示はjaなので、enのときだけ切り替える
      if (language === 'en') {
        await page.getByTestId('language-switcher').click();
      }
    });

    test('Profileタブが描画される', async ({ page }) => {
      await expect(page.getByRole('heading', { level: 1, name: t.name })).toBeVisible();
      // 言語ごとに異なる文言。ja/enの切り替えが効いていることの確認を兼ねる
      await expect(page.getByText(t.description)).toBeVisible();
      await expect(page.getByRole('heading', { name: t.links.title })).toBeVisible();
      await expect(page.getByRole('heading', { name: t.experience.title })).toBeVisible();
    });

    test('Activitiesタブに切り替えて描画される', async ({ page }) => {
      await page.getByRole('button', { name: t.activities.title, exact: true }).click();

      await expect(page).toHaveURL(/#activities$/);
      await expect(
        page.getByRole('heading', { name: t.activities.ltPresentations })
      ).toBeVisible();
      // 言語ごとに異なる見出し(社内勉強会 / Internal Study Sessions)
      await expect(
        page.getByRole('heading', { name: t.activities.internalStudySessions })
      ).toBeVisible();
    });
  });
}
