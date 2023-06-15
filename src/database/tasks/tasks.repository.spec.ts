import { TaskRepositoryService } from './tasks.repository';

describe('task.repository.spec', () => {
  it('getAll', async () => {
    const findMock = [
      {
        id: 'id',
        title: 'title',
        description: 'description',
      },
    ];

    const repositoryMock = jest
      .fn(() => {
        return {
          find: () => findMock,
        };
      })
      .getMockImplementation();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tasksRepository = new TaskRepositoryService(
      // @ts-ignore
      repositoryMock(),
    );

    const result = await tasksRepository.getAll();

    expect(result).toBe(findMock);
  });
});
