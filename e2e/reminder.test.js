/* eslint-disable no-undef */
describe('Reminder', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  const createReminder = async reminder => {
    const input = 'reminder-name-input';
    const newReminderButton = 'Novo lembrete';
    const saveButton = 'Salvar';
    await element(by.text(newReminderButton)).tap();
    await waitFor(element(by.text('Novo lembrete')))
      .toBeVisible()
      .withTimeout(500);

    await element(by.id(input)).tap();
    await element(by.id(input)).replaceText(reminder);
    await element(by.text(saveButton)).tap();
  };

  it('should have welcome screen with correct texts', async () => {
    await expect(element(by.text('Lembretes'))).toBeVisible();
    await expect(element(by.text('Novo lembrete'))).toBeVisible();
  });
  it('should create a new reminder', async () => {
    const reminder = 'Comprar Pão';
    await createReminder(reminder);

    await expect(element(by.text(reminder))).toBeVisible();
  });

  it('should mark a reminder as done', async () => {
    const reminder = 'Comprar bolo';
    await createReminder(reminder);
    await element(by.text(reminder)).tap();

    await element(by.text('Finalizar lembrete')).tap();
    await expect(element(by.id('done_icon'))).toBeVisible();
  });

  it('should delete a reminder', async () => {
    const reminder = 'Comprar bolacha';
    await createReminder(reminder);
    await element(by.text(reminder)).tap();

    await element(by.text('Deletar')).tap();
    await expect(element(by.text(reminder))).not.toBeVisible();
  });

  it('should be able to cancel the reminder modal', async () => {
    const reminder = 'Comprar café';
    await createReminder(reminder);
    await element(by.text(reminder)).tap();

    await element(by.text('Cancelar')).tap();
    await expect(element(by.text(reminder))).toBeVisible();
  });
});
