import styles from './form.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function FormTable({ titleTable, contentTable }) {
    // const contentTable = [
    //     {
    //         a: 'adadad',
    //     },
    //     {
    //         a: 'jjjdjjd',
    //     },
    // ];
    const data = [
        {
            msg: 'Hello',
            num: 1,
        },
        {
            msg: 'Hey',
            num: 2,
        },
        {
            msg: 'Hi',
            num: 3,
        },
        {
            msg: 'Bye',
            num: 4,
        },
        {
            msg: 'Welcome',
            num: 5,
        },
        {
            msg: 'Thanks',
            num: 6,
        },
    ];

    return (
        <div className={cx('FormTableWrapper')}>
            <table>
                <tr>
                    {titleTable
                        ? titleTable.map((data, index) => {
                              return (
                                  <>
                                      <th key={index}>{data.name}</th>
                                  </>
                              );
                          })
                        : ''}
                </tr>
                {contentTable
                    ? contentTable.map((data, index) => {
                          return (
                              <tr>
                                  <td key={index}>{data.matournuocngoai}</td>
                                  <td key={index}>{data.tencactournuocngoai}</td>{' '}
                              </tr>
                          );
                      })
                    : ''}
            </table>
        </div>
    );
}

export default FormTable;
