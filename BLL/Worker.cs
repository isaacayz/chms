using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class WorkersRepository : IRepository<Worker>
    {
        private ChmsModel _db;
        public int Delete(Worker entity)
        {
            throw new NotImplementedException();
        }

        public List<Worker> GetAll()
        {
            throw new NotImplementedException();
        }

        public Worker GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Worker GetById(long id)
        {
            throw new NotImplementedException();
        }

        public int Insert(Worker entity)
        {
            _db = new ChmsModel();
            _db.Workers.Add(entity);
            return _db.SaveChanges();
        }

        public List<Worker> SearchFor(Expression<Func<Worker, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public int Update(Worker entity)
        {
            throw new NotImplementedException();
        }
    }
}
