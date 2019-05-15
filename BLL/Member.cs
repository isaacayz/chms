using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using System.Data.Entity.Migrations;
using System.Linq.Expressions;
using System.Activities.Debugger;

namespace BLL
{
    public class MemberRepository : IRepository<Member>
    {
        private ChmsModel _db;
        //private readonly Member _member;

        public int Delete(Member entity)
        {
            try
            {
                _db = new ChmsModel();
                _db.Members.Attach(entity);
                _db.Members.Remove(entity);
                return _db.SaveChanges();
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public List<Member> GetAll()
        {
            _db = new ChmsModel();
            return _db.Members.ToList();
        }

        public Member GetById(long id)
        {
            _db = new ChmsModel();
            return _db.Members.FirstOrDefault(i => i.Id.Equals(id));
        }

        public Member GetById(int id)
        {
            _db = new ChmsModel();
            return _db.Members.FirstOrDefault(i => i.Id.Equals(id));
        }

        public int Insert(Member entity)
        {
            _db = new ChmsModel();
            _db.Members.Add(entity);
            return _db.SaveChanges();
        }

        public List<Member> SearchFor(Expression<Func<Member, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public int Update(Member entity)
        {
            _db = new ChmsModel();
            _db.Members.AddOrUpdate(entity);
            return _db.SaveChanges();
        }
    }
}
