using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
	interface IRepository<T>
	{

		int Insert(T entity);
		int Delete(T entity);
		int Update(T entity);
		List<T> SearchFor(Expression<Func<T, bool>> predicate);
		List<T> GetAll();
		T GetById(int id);
		T GetById(long id);
	}
}
