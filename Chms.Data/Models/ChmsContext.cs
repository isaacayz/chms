namespace Chms.Data.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ChmsContext : DbContext
    {
        public ChmsContext()
            : base("name=ChmsContext")
        {
        }

        public virtual DbSet<Member> Members { get; set; }
        public virtual DbSet<Worker> Workers { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Member>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.LastName)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.Sex)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.Address)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.PhoneNumber)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.Email)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.Salutation)
                .IsUnicode(false);

            modelBuilder.Entity<Member>()
                .Property(e => e.UniqueCode)
                .IsUnicode(false);

            modelBuilder.Entity<Worker>()
                .Property(e => e.Description)
                .IsUnicode(false);
        }
    }
}
