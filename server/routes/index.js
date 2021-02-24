module.exports = (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  );

  const klawSync = require('klaw-sync');
  const path = require('path');
  async function useControllersTodoItems() {
    const paths = klawSync(
      path.resolve('server/controllers/todoitems'),
      { nodir: true, }
      );
    let controllersCount = 0;
    paths.forEach((file) => {
      if (
        path.basename(file.path)[0] === '_' ||
        path.basename(file.path)[0] === '.'
      )
        return;
      app.use('/items', require(file.path));
      controllersCount++;
    });

    console.info(`Total controllers: ${controllersCount}`);
  }

  useControllersTodoItems();

};
